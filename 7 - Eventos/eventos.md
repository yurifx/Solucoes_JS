## EVENTS

#### FORM EVENTS

| Event Name  | Fired When |
| ------------- | ------------- |
|reset|	The reset button is pressed|
|submit|	The submit button is pressed|


#### Focus 
| Event Name  | Fired When |
| ------------- | ------------- |
|focus|	An element has received focus (does not bubble).|
|blur |	An element has lost focus (does not bubble).|


#### Text Composition 

| Event Name  | Fired When |
| ------------- | ------------- |
|compositionstart	|The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition).|
|compositionupdate|	A character is added to a passage of text being composed.|
|compositionend|	The composition of a passage of text has been completed or canceled.|

#### Resources 

| Event Name  | Fired When |
| ------------- | ------------- |
|cached         | The resources listed in the manifest have been downloaded, and the application is now cached.| 
|error          | A resource failed to load.                                                                   |
|abort          | The loading of a resource has been aborted.                                                  | 
|load           | A resource and its dependent resources have finished loading.                                |
|beforeunload   | The window, the document and its resources are about to be unloaded.                         |
|unload         | The document or a dependent resource is being unloaded.                                      |


#### Network 
| Event Name  | Fired When |
| ------------- | ------------- |
|online|	The browser has gained access to the network.|
|offline|	The browser has lost access to the network.|


#### WebSocket 

| Event Name  | Fired When |
| ------------- | ------------- |
|open	|A WebSocket connection has been established.|
|message|	A message is received through a WebSocket.|
|error|	A WebSocket connection has been closed with prejudice (some data couldn't be sent for example).|
|close|	A WebSocket connection has been closed.|


#### Session History

| Event Name  | Fired When |
| ------------- | ------------- |
|pagehide|	A session history entry is being traversed from.|
|pageshow|	A session history entry is being traversed to.|
|popstate|	A session history entry is being navigated to (in certain cases).|


#### CSS Animation

| Event Name  | Fired When |
| ------------- | ------------- |
|animationstart	|A CSS animation has started.|
|animationend	|A CSS animation has completed.|
|animationiteration	|A CSS animation is repeated.|


#### CSS Transition 

| Event Name  | Fired When |
| ------------- | ------------- |
|transitionstart|	A CSS transition has actually started (fired after any delay).|
|transitioncancel| A CSS transition has been cancelled.|
|transitionend	| A CSS transition has completed.|
|transitionrun	| A CSS transition has began running (fired before any delay starts).|


#### Printing

| Event Name  | Fired When |
| ------------- | ------------- |
|beforeprint|	The print dialog is opened|
|afterprint	|The print dialog is closed|


#### Printing

| Event Name  | Fired When |
| ------------- | ------------- |

