# SCDFxIBM Lifesavers' Innovation Challenge: Call for Code 2021

(insert image here)

**Problem Statement 1: Post pandemic**  

**Team name:** 

**Idea Name:**

## Short Description
In fire emergency situations that demand urgent action, any delay can mean loss of life and property. The restrictions brought about by COVID-19 onto physically deployed firefighters such as social distancing and even mask-wearing can cause inefficiencies which may hinder their response. If they even exacerbate the spread of the virus. 

Our idea is to reduce the need for physically deployed manpower to fire emergency situations by repurposing the SCDF Unmanned Firefighting Machine (UFM) to be deployed to fight the fire instead of humans. Through integration with AI and IoT technology and a synergestic combination with from the SCDF Unmanned Aerial Vehicle (UAV), the UFM can be repurposed to be fully autonomous (with a human master) in fighting the fire without human control.
 
## Getting started - deploying our tech stack

## Pitch video
[Youtube link](#)

## Architecture of proposed solution

## Detailed report
[Link to report](https://docs.google.com/document/d/159HvT_roS5KOp-HkLzXx1kPh5p2cpTCU60tFzk6mu-A/)

## Tech stack
Frontend:

* UI for controlling and configuring robot

Backend (ML):

* Rely on artificially created dataset
* Rely on on-the-job training (actual scenarios)
* Evaluates on sensor and image/video data

Backend (robot):

* ROS interface with UFM/UAV to send tele-op commands and interface directly with sensors.
* Uses Gazebo to simulate the environment and robot with its sensors

References:

https://github.com/deltaautonomy/delta_viz (https://roboticsknowledgebase.com/wiki/tools/roslibjs/)
https://msadowski.github.io/ros-web-tutorial-pt1/ (simpler tutorial)
https://github.com/osrf/rvizweb (rviz on the web)
https://discourse.ros.org/t/webviz-ros-data-visualization-in-the-browser/9783
https://medium.com/cruise/webviz-fb5f77ebe52b

TurtleBot References:
https://emanual.robotis.com/docs/en/platform/turtlebot3/quick-start/
https://emanual.robotis.com/docs/en/platform/turtlebot3/simulation/#gazebo-simulation
