(function(uiExtensions2) {
  "use strict";
  uiExtensions2.hubspot.extend(({ actions }) => /* @__PURE__ */ React.createElement(Extension, { openIframe: actions.openIframeModal }));
  const Extension = ({ context, openIframe }) => {
    const handleClick = () => {
      openIframe({
        uri: "https://hubspot-ui-card.onrender.com/",
        height: 1e3,
        width: 1e3,
        title: "Content from mongoDB",
        flush: true
      });
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(uiExtensions2.Flex, { direction: "column", align: "start", gap: "medium" }, /* @__PURE__ */ React.createElement(uiExtensions2.Box, null, /* @__PURE__ */ React.createElement(uiExtensions2.Button, { type: "submit", onClick: handleClick }, "Click me"))));
  };
})(uiExtensions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZS5qcyIsInNvdXJjZXMiOlsiLi4vZXh0ZW5zaW9ucy9FeGFtcGxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rLCBCdXR0b24sIFRleHQsIEJveCwgRmxleCwgaHVic3BvdCB9IGZyb20gXCJAaHVic3BvdC91aS1leHRlbnNpb25zXCI7XG5cbi8vIERlZmluZSB0aGUgZXh0ZW5zaW9uIHRvIGJlIHJ1biB3aXRoaW4gdGhlIEh1YnNwb3QgQ1JNXG5odWJzcG90LmV4dGVuZCgoXG4gIHsgYWN0aW9ucyB9IC8vIHNlcnZlcmxlc3MgZnVuY3Rpb24gaXMgbm90IHJlcXVpcmVkIGZvciBzaW1wbHkgZGlzcGxheWluZyBhbiBpZnJhbWVcbikgPT4gPEV4dGVuc2lvbiBvcGVuSWZyYW1lPXthY3Rpb25zLm9wZW5JZnJhbWVNb2RhbH0gLz4pO1xuXG5jb25zdCBFeHRlbnNpb24gPSAoeyBjb250ZXh0LCBvcGVuSWZyYW1lIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgb3BlbklmcmFtZSh7XG4gICAgICB1cmk6IFwiaHR0cHM6Ly9odWJzcG90LXVpLWNhcmQub25yZW5kZXIuY29tL1wiLCBcbiAgICAgIGhlaWdodDogMTAwMCxcbiAgICAgIHdpZHRoOiAxMDAwLFxuICAgICAgdGl0bGU6ICdDb250ZW50IGZyb20gbW9uZ29EQicsXG4gICAgICBmbHVzaDogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cInN0YXJ0XCIgZ2FwPVwibWVkaXVtXCI+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgQ2xpY2sgbWVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJ1aUV4dGVuc2lvbnMiLCJGbGV4IiwiQm94IiwiQnV0dG9uIl0sIm1hcHBpbmdzIjoiOztBQUdRLEVBQUFBLGNBQUEsUUFBQSxPQUFPLENBQ2IsRUFBRSxRQUFRLDBDQUNOLFdBQVUsRUFBQSxZQUFZLFFBQVEsZ0JBQUEsQ0FBaUIsQ0FBRTtBQUV2RCxRQUFNLFlBQVksQ0FBQyxFQUFFLFNBQVMsaUJBQWlCO0FBQzdDLFVBQU0sY0FBYyxNQUFNO0FBQ2IsaUJBQUE7QUFBQSxRQUNULEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxNQUFBLENBQ1I7QUFBQSxJQUFBO0FBSUQsV0FBQSxzQkFBQSxjQUFBLE1BQUEsVUFBQSwwQ0FDR0MsY0FBQUEsTUFBSyxFQUFBLFdBQVUsVUFBUyxPQUFNLFNBQVEsS0FBSSxTQUN6QyxHQUFBLHNCQUFBLGNBQUNDLGNBQUFBLFdBQ0Usc0JBQUEsY0FBQUMsY0FBQUEsUUFBQSxFQUFPLE1BQUssVUFBUyxTQUFTLGVBQWEsVUFFNUMsQ0FDRixDQUNGLENBQ0Y7QUFBQSxFQUVKOzsifQ==
