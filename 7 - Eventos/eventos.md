## EVENTS

#### RESOURCES 

| Event Name  | Fired When |
| ------------- | ------------- |
|cached         | The resources listed in the manifest have been downloaded, and the application is now cached.| 
|error          | A resource failed to load.                                                                   |
|abort          | The loading of a resource has been aborted.                                                  | 
|load           | A resource and its dependent resources have finished loading.                                |
|beforeunload   | The window, the document and its resources are about to be unloaded.                         |
|unload         | The document or a dependent resource is being unloaded.                                      |

#### NETWORK 
| Event Name  | Fired When |
| ------------- | ------------- |
|online|	The browser has gained access to the network.|
|offline|	The browser has lost access to the network.|

#### FOCUS 
| Event Name  | Fired When |
| ------------- | ------------- |
|focus|	An element has received focus (does not bubble).|
|blur |	An element has lost focus (does not bubble).|



#### WEBSOCKET 

| Event Name  | Fired When |
| ------------- | ------------- |
|open	|A WebSocket connection has been established.|
|message|	A message is received through a WebSocket.|
|error|	A WebSocket connection has been closed with prejudice (some data couldn't be sent for example).|
|close|	A WebSocket connection has been closed.|
