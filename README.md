# 3DPR-Template<br/>
This is a first Githubg so still trying to figure out how this works<br/>
3DPR is based on the Aframe Framework, along with the Aframe-extra components.<br/>
Other version have been built leveraging NAF component in order to add networking capabilities.<br/><br/>

3DPR is adding a new dimension to your presentation.<br/>
<b>Because we cannot move around anymore (due to COVID), It does not mean all our presentations need to be flat</b><br/>
 try the demo here : https://xrlab.ddns.net/3DPR-Template/ <br/><br/>

You can then either deploy it on a online ecitor like codepen or glitch ( examples soon to come)<br/>
Or host it on a cloud provider like Oracle Cloud Infrastructure, Google Cloud PLatform or AWS.<br/>
Find below the steps to create a webserver on Oracle CLoud for free:<br/>
https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/apache-on-oracle-linux/01oci-ol-apache-summary.htm<br/>
and after following it step by step add a last command to allow SFTP upload to the var/www/html directory<br/>
$sudo chmod 777 /var/www/html<br/>
And just to be sure the firewall is not an issue allow it for port 22<br/>
$ sudo firewall-cmd --permanent --add-port=22/tcp<br/>
$ sudo firewall-cmd --reload<br/>
Then simply upload to the /var/www/html folder the content of this repository and VOILA :)


31/01/2021 - First Release<br/><br/>
* VR mode supported for Quest
* Dummy deck on main screen
* 3DPR Pitch deck on panels
 
