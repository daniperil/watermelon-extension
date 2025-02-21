import { ContextItem } from "../../ContextItem";
import getPlural from "../others/text/getPlural";
import * as vscode from "vscode";
import getMostRelevantJiraTickets from "../jira/getMostRelevantJiraTickets";
import { backendURL, WATERMELON_OPEN_LINK_COMMAND } from "../../constants";
import dateToHumanReadable from "../others/text/dateToHumanReadable";

export const getJiraItems = async (
  searchString: string,
  accountLabel: string
) => {
  let items: ContextItem[] = [];
  const mostRelevantJiraTickets =
    (await getMostRelevantJiraTickets({
      user: accountLabel,
      prTitle: searchString,
    })) || {};
  let errorText = "";
  if (mostRelevantJiraTickets?.errorText) {
    if (mostRelevantJiraTickets && "errorText" in mostRelevantJiraTickets) {
      errorText = mostRelevantJiraTickets?.errorText;
      items.push(
        new ContextItem(
          "Please login to Jira",
          vscode.TreeItemCollapsibleState.None,
          "to see Tickets",
          {
            command: WATERMELON_OPEN_LINK_COMMAND,
            title: "Login to Jira",
            arguments: [{ url: backendURL, source: "treeView" }],
          },
          undefined,
          "jira"
        )
      );
      return items;
    }
  }

  let jiraItems;
  if (Array.isArray(mostRelevantJiraTickets)) {
    jiraItems = mostRelevantJiraTickets?.map((ticket: any) => {
      return new ContextItem(
        ticket.key,
        vscode.TreeItemCollapsibleState.Collapsed,
        ticket.fields.summary,
        {
          command: WATERMELON_OPEN_LINK_COMMAND,
          title: "View Jira ticket",
          arguments: [
            {
              url: `${ticket.serverInfo.baseUrl}/browse/${ticket.key}`,
              source: "treeView",
            },
          ],
        },
        [
          new ContextItem(
            ticket.renderedFields?.description?.length
              ? ticket.renderedFields.description
              : "No description",
            ticket?.comments?.length > 0
              ? vscode.TreeItemCollapsibleState.Collapsed
              : vscode.TreeItemCollapsibleState.None,
            ticket.renderedFields.created,
            undefined,
            ticket?.comments?.length > 0
              ? ticket.comments?.flatMap((comment: any, index: number) => {
                  return [
                    new ContextItem(
                      comment.updateAuthor.displayName,
                      vscode.TreeItemCollapsibleState.None,
                      dateToHumanReadable(comment.created),
                      {
                        command: WATERMELON_OPEN_LINK_COMMAND,
                        title: "View user",
                        arguments: [
                          {
                            url: `${ticket.serverInfo.baseUrl}/jira/people/${comment.updateAuthor.accountId}`,
                            source: "treeView",
                          },
                        ],
                      },
                      undefined,
                      comment.updateAuthor.avatarUrls["48x48"],
                      index === ticket.comments.length - 1
                        ? "jiraCommentable"
                        : undefined
                    ),
                    new ContextItem(
                      comment.renderedBody,
                      vscode.TreeItemCollapsibleState.None,
                      dateToHumanReadable(comment.updated),
                      {
                        command: WATERMELON_OPEN_LINK_COMMAND,
                        title: "View comment",
                        arguments: [
                          {
                            url: `${ticket.serverInfo.baseUrl}/browse/${ticket.key}?focusedCommentId=${comment.id}`,
                            source: "treeView",
                          },
                        ],
                      },
                      undefined,
                      undefined,
                      index === ticket.comments.length - 1
                        ? "jiraCommentable"
                        : undefined
                    ),
                  ];
                })
              : undefined
          ),
        ],
        undefined,
        "jiraCommentable"
      );
    });
  }
  if (!jiraItems || jiraItems.length === 0) {
    items.push(
      new ContextItem(
        "Jira",
        vscode.TreeItemCollapsibleState.None,
        `No Tickets found`,
        undefined,
        undefined,
        "jira"
      )
    );
  } else {
    items.push(
      new ContextItem(
        "Jira",
        vscode.TreeItemCollapsibleState.Collapsed,
        `${mostRelevantJiraTickets?.length?.toString()} ticket${getPlural(
          mostRelevantJiraTickets?.length
        )}`,
        undefined,
        jiraItems ? jiraItems : [],
        "jira"
      )
    );
  }
  return items;
};
