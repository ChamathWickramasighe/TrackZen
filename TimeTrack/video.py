
import cv2 

# take frame from capera
cap = cv2.VideoCapture(0)

while True:

    # Take frame from camara
    ret, frame = cap.read()

    # Display frame
    cv2.imshow("frame", frame)
    key = cv2.waitKey(1) 