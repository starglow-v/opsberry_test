const { ListUsersCommand, ListRolesCommand, ListGroupsCommand, ListPoliciesCommand } = require('@aws-sdk/client-iam');

exports.queryIAMResources = async (client) => {
  try {
    const listUsersCommand = new ListUsersCommand({});
    const listRolesCommand = new ListRolesCommand({});
    const listGroupsCommand = new ListGroupsCommand({});
    const listPoliciesCommand = new ListPoliciesCommand({});

    const users = await client.send(listUsersCommand);
    const roles = await client.send(listRolesCommand);
    const groups = await client.send(listGroupsCommand);
    const policies = await client.send(listPoliciesCommand);

    const resources = [];

    // Populate the resources array with user data
    users.Users.forEach(user => {
      resources.push({
        ResourceType: 'Identity',
        ResourceName: user.UserName,
        ResourceID: user.UserId,
        CreationDate: user.CreateDate
      });
    });

    // Populate the resources array with role data
    roles.Roles.forEach(role => {
      resources.push({
        ResourceType: 'Role',
        ResourceName: role.RoleName,
        ResourceID: role.RoleId,
        CreationDate: role.CreateDate
      });
    });

    // Populate the resources array with group data
    groups.Groups.forEach(group => {
      resources.push({
        ResourceType: 'Group',
        ResourceName: group.GroupName,
        ResourceID: group.GroupId,
        CreationDate: group.CreateDate
      });
    });

    // Populate the resources array with policy data
    policies.Policies.forEach(policy => {
      resources.push({
        ResourceType: 'Policy',
        ResourceName: policy.PolicyName,
        ResourceID: policy.Arn,
        CreationDate: policy.CreateDate
      });
    });

    return resources;
  } catch (error) {
    console.error('Error querying IAM resources', error);
    throw error;
  }
};