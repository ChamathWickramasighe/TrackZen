import time
import pygetwindow as gw

active_window_name = ""
while True:
    new_window = gw.getActiveWindow()
    new_window_name = new_window.title if new_window else ""

    if active_window_name != new_window_name:
        active_window_name = new_window_name
        print(active_window_name)

    time.sleep(10)