#1
Scrolling throw the files, it seems that the project structure was not that much affected. It seems at the first glance, that the hacking did not comprimised the layout of the folders structure.
By opening a lot of the files, I could see a red warning from the IDE in the file
animals. The problem was typing problem on the variable the was about to be exported. I fixed by changing "ANlMALS" to "ANIMALS". There are more warnings but I usually let the compiler tell me what to fix first so I tried running the app.
The compiler said "alert is not defined" so by going to the actual file we could change alert to console.log or simply remove it.
