import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend((
  { actions } // serverless function is not required for simply displaying an iframe
) => <Extension openIframe={actions.openIframeModal} />);

const Extension = ({ context, openIframe }) => {
  const handleClick = () => {
    openIframe({
      uri: "https://49750020.hs-sites.com/data-mongo", 
      height: 1000,
      width: 1000,
      title: 'Content from mongoDB',
      flush: true,
    });
  };

  return (
    <>
      <Flex direction="column" align="start" gap="medium">
        <Box>
          <Button type="submit" onClick={handleClick}>
            Click me
          </Button>
        </Box>
      </Flex>
    </>
  );
};