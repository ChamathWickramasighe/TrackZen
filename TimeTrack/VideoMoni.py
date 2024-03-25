import cv2 

# Load the pre-trained face detection model
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Open camera capture
cap = cv2.VideoCapture(0)

while cap.isOpened():  # Check if camera is opened
    # Take frame from camera
    ret, frame = cap.read()
    if not ret:
        break  # Break the loop if frame not captured successfully
    
    # Convert frame to grayscale
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Perform face detection
    faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    
    # Draw rectangles around detected faces
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
    
    # Display frame
    cv2.imshow("frame", frame)
    
    # Check for key press
    key = cv2.waitKey(1)
    if key == 27:  # Press 'Esc' key to exit
        break

# Release the camera and close OpenCV windows
cap.release()
cv2.destroyAllWindows()