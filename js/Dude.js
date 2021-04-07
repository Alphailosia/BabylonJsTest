export default class Dude {
    constructor(dudeMesh, speed) {
        this.dudeMesh = dudeMesh;

        if (speed)
            this.speed = speed;
        else
            this.speed = 1;

        this.dist = 0;
        this.dir = new BABYLON.Vector3(0, 0, 5);
        this.angle = 0; 
        // in case, attach the instance to the mesh itself, in case we need to retrieve
        // it after a scene.getMeshByName that would return the Mesh
        // SEE IN RENDER LOOP !
        dudeMesh.Dude = this;
    }

    move(scene) {  
        this.dudeMesh.moveWithCollisions(this.dir.multiplyByFloats(this.speed, this.speed, this.speed));
        this.dist++;
        if(this.dist===200){
            this.dir = new BABYLON.Vector3(Math.sin(this.angle+90),0, Math.cos(this.angle+90));
            this.dudeMesh.rotation.y = Math.atan2(-this.dir.x, -this.dir.z);
            this.angle+=90;
            this.dist=0;
        }
    }
}