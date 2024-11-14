const iamService = require('../services/iamService');
const csvUtils = require('../utils/csvUtils');

exports.generateIAMReport = async (req, res) => {
  const { accessKeyId, secretAccessKey } = req.body;
  
  try {
    // Update AWS config with credentials
    const client = require('../config/awsConfig')(accessKeyId, secretAccessKey);

    // Query IAM resources
    const resources = await iamService.queryIAMResources(client);

    // Generate CSV file
    await csvUtils.generateCSV(resources);

    res.status(200).send('CSV report generated successfully');
  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).send('Error generating report');
  }
};