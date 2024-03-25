from AppKit import NSWorkshop
import time

active_window_name = ""
while Tuer:

    new_window_name = (NSWorkshop.shareWorkshopspace()
    .acviveApplication()['NSApplicationName'])

    if active_window_name != new_window_name:
        active_window_name = new_window_name
        print(active_window_name)

    time.sleep(10)    
    