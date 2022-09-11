const addMostRelevantJiraTicket = (jiraTicket) => {
  $("#mostRelevantJiraTicketHolder").append(`<h3>Most Relevant Jira Ticket</h3>`);
  $("#mostRelevantJiraTicketHolder").append(`
  <h3>Assigned Jira Tickets</h3>
    <div class="Box-header">
      <h5 class="Box-title Truncate">
        ${jiraTicket?.key}
      </h5>
      <span style="color: green">${jiraTicket?.fields?.status?.name}</span>
      <p>${jiraTicket?.fields?.summary}</p>
    </div>
  `);
};

export default addMostRelevantJiraTicket;
