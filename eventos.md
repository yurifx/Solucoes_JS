## EVENTS

#### FORM

| Event Name  | Fired When |
| ------------- | ------------- |
|reset|	The reset button is pressed|
|submit|	The submit button is pressed|


#### View (Página)
| Event Name  | Fired When |
| ------------- | ------------- |
|fullscreenchange	|An element was turned to fullscreen mode or back to normal mode.|
|fullscreenerror|	It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied.|
|resize	|The document view has been resized.|
|scroll|	The document view or an element has been scrolled.|


#### Focus 
| Event Name  | Fired When |
| ------------- | ------------- |
|focus|	An element has received focus (does not bubble).|
|blur |	An element has lost focus (does not bubble).|


#### Keyboard
| Event Name  | Fired When |
| ------------- | ------------- |
|keydown|	ANY key is pressed|
|keypress|	ANY key except Shift, Fn, CapsLock is in pressed position. (Fired continously.)|
|keyup	|ANY key is released|


#### Text Composition 

| Event Name  | Fired When |
| ------------- | ------------- |
|compositionstart	|The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition).|
|compositionupdate|	A character is added to a passage of text being composed.|
|compositionend|	The composition of a passage of text has been completed or canceled.|


#### Clipboard (Copiar, colar, recortar)

| Event Name  | Fired When |
| ------------- | ------------- |
|cut	|The selection has been cut and copied to the clipboard|
|copy	|The selection has been copied to the clipboard|
|paste	|The item from the clipboard has been pasted|



#### Mouse
| Event Name  | Fired When |
| ------------- | ------------- |
|mouseenter|	A pointing device is moved onto the element that has the listener attached.|
|mouseover|	A pointing device is moved onto the element that has the listener attached or onto one of its children.|
|mousemove|	A pointing device is moved over an element. (Fired continously as the mouse moves.)|
|mousedown|	A pointing device button is pressed on an element.|
|mouseup	|A pointing device button is released over an element.|
|auxclick	|A pointing device button (ANY non-primary button) has been pressed and released on an element.|
|click	|A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element.|
|dblclick|	A pointing device button is clicked twice on an element.|
|contextmenu|	The right button of the mouse is clicked (before the context menu is displayed).|
|wheel	|A wheel button of a pointing device is rotated in any direction.|
|mouseleave	|A pointing device is moved off the element that has the listener attached.|
|mouseout	|A pointing device is moved off the element that has the listener attached or off one of its children.|
|select	|Some text is being selected.|
|pointerlockchange|	The pointer was locked or released.|
|pointerlockerror	|It was impossible to lock the pointer for technical reasons or because the permission was denied.|


#### Drag & Drop 
| Event Name  | Fired When |
| ------------- | ------------- |
|dragstart	|The user starts dragging an element or text selection.|
|drag	|An element or text selection is being dragged (Fired continuously every 350ms).|
|dragend|	A drag operation is being ended (by releasing a mouse button or hitting the escape key).|
|dragenter|	A dragged element or text selection enters a valid drop target.|
|dragover|	An element or text selection is being dragged over a valid drop target. (Fired continuously every 350ms.)|
|dragleave|	A dragged element or text selection leaves a valid drop target.|
|drop|	An element is dropped on a valid drop target.|


#### Media
| Event Name  | Fired When |
| ------------- | ------------- |
|durationchange	|The duration attribute has been updated.|
|loadedmetadata	|The metadata has been loaded.|
|loadeddata	|The first frame of the media has finished loading.|
|canplay	|The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.|
|canplaythrough	|The browser estimates it can play the media up to its end without stopping for content buffering.|
|ended	P|layback has stopped because the end of the media was reached.|
|emptied	|The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.|
|stalled|	The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.|
|suspend|	Media data loading has been suspended.|
|play	|Playback has begun.|
|playing	|Playback is ready to start after having been paused or delayed due to lack of data.|
|pause	|Playback has been paused.|
|waiting|	Playback has stopped because of a temporary lack of data.|
|seeking	|A seek operation began.|
|seeked	|A seek operation completed.|
|ratechange|	The playback rate has changed.|
|timeupdate	|The time indicated by the currentTime attribute has been updated.|
|volumechange|	The volume has changed.|
|complete	|The rendering of an OfflineAudioContext is terminated.|
|audioprocess	|The input buffer of a ScriptProcessorNode is ready to be processed.|



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


[reference](https://developer.mozilla.org/en-US/docs/Web/Events)

