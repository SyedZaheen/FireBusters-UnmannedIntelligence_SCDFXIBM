# FireBusters-UnmannedIntelligence_SCDFXIBM
<img width="965" alt="Screenshot 2021-06-11 at 11 01 44 AM" src="https://user-images.githubusercontent.com/62633038/121624623-70bfd700-caa4-11eb-93fc-3b13ef7ecb4a.png">
ages.githubusercontent.com/62633038/121624491-36eed080-caa4-11eb-9b5d-282a42705a74.png">

Firefighters are not immune to the trends of Covid-19. Covid has created significant impediments to firefighting operations as well. Social distancing and mask wearing isn't really compatible with operations that need maxiumum efficiency to save lives. It's not possible to remain 1 m apart when lives are at stake.

If only there was a way that firefighters, too, can do their work virtually rather than physically, just like other workplaces where "Work From Home" and remote work is the norm. But that sounds ridiculous - how do you even fight a fire you're not close to?

Introducing: Unmanned Intelligence. The next evolution of SCDF’s fire fighting capabilities, leveraging machine learning, AI, and IoT through the IBM cloud to train completely autonomous machines to fight the fire for us, without needing to physically train and deploy humans to the fire! 

Controlled from a dashboard, these machines are able to fight the fire by themselves, and their human masters can keep an eye on them from a control centre while the robots do their job. Maybe firefighting "remotely" isn't so ridiculous after all!


## Our Team: The FireBusters

#### Syed Mohammed Mosayeeb Al-Hady Zaheen
An NTU Data Science and AI freshie
#### Hoe Jun Leong
#### Jyotit Kaushal
Freshmore from SUTD with a passion for Machine Learning and AI
#### Lee Jun Jie
Computer Engineering Graduate currently serving in SCDF
#### Visshal Natarajan
Freshmore from SUTD with a passion for ideas worth pursuing

## Unmanned Intelligance in a gist

In fire emergency situations that demand urgent action, any delay can mean loss of life and property. The restrictions brought about by COVID-19 onto physically deployed firefighters such as social distancing and even mask-wearing can cause inefficiencies which may hinder their response. In urgent situations firefighters may be forced to forsake some of these measures, which may exacerbate the spread of the virus.

Our idea is to reduce the need for physically deployed manpower to fire emergency situations by repurposing the SCDF Unmanned Firefighting Machine (UFM) to be deployed to fight the fire instead of humans. Through integration with AI and IoT technology and a synergestic combination with geospatial data gathered from the SCDF Unmanned Aerial Vehicle (UAV) (which is a drone that is employed by SCDF to get a bird's eye view of the incident), the UFM can be repurposed to be fully autonomous (with a human master) in fighting the fire without human control.

#### How it will work in a real fire - step by step

1. When there is a fire call, HQ will deploy the modified UFM to the location.
2. Once deployed, ground crew will connect the water supply to the UFM, and hand over control to the remote controller.
3. The remote controller may choose to take manual control, or let the AI fight the fire by itself with minimal intervention
4. If there is a UAV deployed to the location, the UAV will send geospatial data to the UFM which can use it to map out its surroundings so that it can firefight optimally

## Our Pitch Video

With so many cogs and gears in our project, it was of utmost importance to create a pitch video that is able to capture the core of our project both technically as well as our various thought-processes throughout the length of this Hackathon. That said, here's our pitch video for the project **Unmanned Intelligence** on Youtube.
https://youtu.be/kcHfiDdwXgI

## The Unmanned Intelligence Architecture with Detailed Solution

<img src="images/Architecture.png" width="720">

*https://docs.google.com/document/d/159HvT_roS5KOp-HkLzXx1kPh5p2cpTCU60tFzk6mu-A/edit?ts=60bdf66d#*

## A Proposed Timeline

<img src="images/Timeline.jpg" width="720">

## Requirements and Install

One of the major parts of our solution involves training and thereby dealing with a neural network. This means that for running our program on one's own computer and/or server would require one to install a number of essentiall packages and/or libraries like `pytorch`, `tensorboard`, `argparse`, `logging`, etc. There however, is no need to proactively fret over these dependencies since our code should automatically list everything uninstalled upon running. They can then be installed using the terminal window using the following command on both Windows and MacOS:
```bash
pip install PackageName
```

## Training the AI

The workflow that goes into creating an object detection model (in our case a fire) is one that can be considered two-fold. While one part involves making our machine/network aware of what the object we want actually looks like and how it may detect it. The second involves actually exporting an image or a video into our network and then running the pre-trained model on the same.

For our project, we use the YoloV5 object-detection model, acclaimated for its ease of use to do a custom train as well as its customization abilities that allows one to carefully tune the various parameters of the model as and when required.

Our whole procedure including the training and then deploying our AI model using IBM Watson Studio can be easily categorized into some key steps. The first involves sorting out all the pre-requisites required for the project and this involves setting up the required environment in an IDE, installing all the required packages, etc; collecting the dataset(s) required to train our model; setting up the directories in an appropriate order; configuring the YAML files (something that's especially crucial when using yolov5), etc.
We then go on to deploy the model using a service like IBM Watson Studio; AWS Machine Learning, etc. using the `train.py`. This deployment can be further customized based on the accuracy required and/or time available to train the model.
This rather time-consuming step is then followed by the actual detection of the set object (i.e. fire) by using `detect.py` on an unseen image exported into our model and/or streamed live.

## Results

Upon succesful training and then deployment of our model, we are now capable of detecting a fire or several fires in real-time from an unseen footage and/or camera captured using the camera on-board the UMF, allowing the operators to fight the fire remotely and much more efficiently. 
## Impact 
The automation of UFM's would enable SCDF to reduce the number of professional fire-fighters on the site of fire, thereby minimising the risk of injury. Further, it would help overcome the manpower shortage created due to the unavailability of trained NS Men (COVID-restrictions), thereby enabling SCDF to operate more efficiently by leveraging existing technology. Additionaly, in the long run the automation of UFM's would be in alignmnent with the agenda of making Singapore a smart nation. The 


## Softwares Employed for the Solution

- IBM Watson Studio
- ROS
- IBM Cloud
- Amazon S3 Storage
- React Web Application
## Credits
