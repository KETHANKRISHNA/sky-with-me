import cv2
import os

def extract_frames(video_path, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error: Could not open video file.")
        return
        
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Total frames in video: {total_frames}")
    
    count = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        count += 1
        # Save as high-quality JPG (quality 95)
        filename = os.path.join(output_dir, f"ezgif-frame-{count:03d}.jpg")
        cv2.imwrite(filename, frame, [int(cv2.IMWRITE_JPEG_QUALITY), 95])
        
        if count % 10 == 0:
            print(f"Extracted {count}/{total_frames} frames...")
            
    cap.release()
    print(f"Successfully extracted {count} high-quality frames!")

if __name__ == "__main__":
    video_path = "Create_video_scroll_animation_202605211457.mp4"
    output_dir = "skateframes"
    extract_frames(video_path, output_dir)
