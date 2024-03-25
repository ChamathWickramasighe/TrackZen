from __future__ import print_function
import time
import win32gui
import pyautogui

def get_active_window_title():
    active_window = win32gui.GetForegroundWindow()
    window_title = win32gui.GetWindowText(active_window)
    return window_title

active_window_name = ''
while True:
    new_window_name = get_active_window_title()
    
    if active_window_name != new_window_name:
        active_window_name = new_window_name 
        print(active_window_name)
        
        if active_window_name == 'Google Chrome':
            # Send keyboard shortcut to get URL of active tab in Google Chrome
            pyautogui.hotkey('ctrl', 'l')
            pyautogui.hotkey('ctrl', 'c')
            url = pyautogui.hotkey('ctrl', 'v')
            print("URL of active tab:", url)

    time.sleep(10)