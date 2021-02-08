# 3DPR-Template<br/>

<img align="center" src="/img/Capture.PNG" width="300px" />

3DPR is adding a new dimension to your presentation.<br/>
<b>Because we cannot move around anymore (due to COVID), It does not mean all our presentations need to be flat</b><br/>
 try the demo here : https://xrlab.ddns.net/3DPR-Template/ <br/><br/>

3DPR is based on the Aframe Framework, along with the Aframe-extra components.<br/>
Other version have been built leveraging NAF component in order to add networking capabilities.<br/><br/>

You can then either deploy it on a online ecitor like codepen or glitch ( examples soon to come)<br/>
Or host it on a cloud provider like Oracle Cloud Infrastructure, Google Cloud PLatform or AWS.<br/>
Find below the steps to create a webserver on Oracle CLoud for free:<br/><br/>
https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/apache-on-oracle-linux/01oci-ol-apache-summary.htm<br/>
and after following it step by step add a last command to allow SFTP upload to the var/www/html directory<br/>
$sudo chmod 777 /var/www/html<br/>
And just to be sure the firewall is not an issue allow it for port 22<br/>
$ sudo firewall-cmd --permanent --add-port=22/tcp<br/>
$ sudo firewall-cmd --reload<br/>
Then simply upload to the /var/www/html folder the content of this repository and VOILA :)<br/><br/>

If you need also to enable https to avoid the sensors requesting it alert message:<br/>
1) run <a href="https://certbot.eff.org/lets-encrypt/centosrhel7-apache">certbot for apache</a><br/>
2) open firewall for port 443:<br/>
$ sudo firewall-cmd --permanent --add-port=443/tcp<br/>
$ sudo firewall-cmd --reload<br/>

08/02/2021 - minor updates <br/>
* Adding a second room ( index2.html )<br/>
* minor fixes to ui.js ( better handlong of embedded youtube videos)<br/>

02/02/2021 - minor updates<br/>
* video played in iframe optimisation
* Splash screen to be controlled from index.html

31/01/2021 - First Release<br/><br/>
* VR mode supported for Quest
* Dummy deck on main screen
* 3DPR Pitch deck on panels
 
NB: This is my first Github repo, so I am still trying to figure out how this works and to keep it clean and up to date ...<br/>
