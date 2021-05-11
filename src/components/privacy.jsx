import React from 'react';

function Privacy() {
    return (
        <div className="opacity">
            <h1>Privacy Statement</h1>
            <p>
                Our mission is to provide you the best experience in your indoor environment. To make that possible, we
                rely on the feedback that you provide while you are in a building that we are monitoring. To use the
                functionalities of the application, you will need internet connection. We have deployed Bluetooth Low
                Energy beacons in our buildings and through the application, we can locate the room you are in and ask
                specific questions relating the room you are visiting. We could ask questions such as “How is the
                temperature?”, and, based on your answer and the actual temperature we measure, we can adjust it to your
                needs.
            </p>
            <p>
                Behind Feedme are two students and one researcher from the Technical University of Denmark and in this
                version of the application, we give you the option of not needing to create a user. When you download
                the application, a random generated token (number) is assigned, so we can distinguish each individual
                “user”: this token is actually the only thing that distinguishes you from the other “users”. The main
                page (tab) of the application is the “Feedback” tab, and once you step into a room that we monitor, you
                will see a message in the bottom indicating the room you are in and a few questions related to that
                room. The other page (tab) “Data” is where you can see the feedback that you have given in a particular
                room or building, but more interestingly also the feedback from other people! Again, each user is
                assigned this random number, so that is how we distinguish between “you” and “them”. There is however a
                login button in the top right corner and that is if you want to become a building administrator
                yourself. If that is the case, you will have to buy your own Bluetooth Beacons and register on our
                website: http://feedme.compute.dtu.dk/
            </p>
        </div>
    );
}
export default Privacy;
