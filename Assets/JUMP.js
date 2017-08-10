#pragma strict
var speed : float = 6f;
public var up:float=0;
public var down:float=0;
public var die1:int=0;
public var attack1:int=0;
private var movement: Vector3;

var anim: Animation;
function Start () {
	 anim = GetComponent.<Animation>();
	  anim["Allosaurus_Walk"].speed = 2;

   anim["Allosaurus_Walk"].wrapMode = WrapMode.Once;
}

function Update () {    
if(Input.GetKeyDown(KeyCode.A))
{

die();
}
if(Input.GetKeyDown(KeyCode.S))	
{

attack();
}

 if(Input.touches[0].tapCount==1)
        {
          die();
        }    

 if(Input.touches[0].tapCount==2)
 {
 attack();
 }

  if(Input.touchCount==2)
 {
 walkup();
 }
   if(Input.touches[0].tapCount==1&&Input.touches[1].tapCount==1&&Input.touches[2].tapCount==1)
 {
 downup();
 }

}

function die ()
{
//die1=1;
//if(Input.GetAxis("Vertical")>0.2||die1==1)
anim.CrossFade("Allosaurus_Die");
if (!anim.isPlaying)
     {
        anim.CrossFade("Allosaurus_Idle");
     }
//die1=0;

}

function attack ()
{
// attack1=1;

 anim.CrossFade("Allosaurus_Attack01");
 if (!anim.isPlaying)
     {
        anim.CrossFade("Allosaurus_Idle");
     }
}

function  walkup()
{


up=up+1;

anim.Play("Allosaurus_Walk");
transform.Translate(0,0,up*Time.deltaTime);
switch1();	
//anim.Animationstate.state.speed=1;
transform.Translate(0,0,up*.5*Time.deltaTime);
switch1();	
transform.Translate(0,0,up*.5*Time.deltaTime);
anim.CrossFadeQueued("Allosaurus_Idle",0.3f,QueueMode.PlayNow);


}
function switch1()
{
yield WaitForSeconds(.5);

}


function  downup()
{


down=down-1;
//movement.Set (0f,0f,up);
//movement = movement.normalized * .5 * Time.deltaTime;
//this.Rigidbody.MovePosition (transform.position + movement);


anim.Play("Allosaurus_Walk");
switch1();	
//anim.Animationstate.state.speed=1;
transform.Translate(0,0,down*.5*Time.deltaTime);
switch1();	
transform.Translate(0,0,down*.5*Time.deltaTime);

  
  
//anim.CrossFade("Allosaurus_Ide",.5);
anim.CrossFadeQueued("Allosaurus_Idle",0.3f,QueueMode.PlayNow);
//anim.PlayQueued("Allosaurus_Idle");
//anim.Animationstate.state.speed =0;
//if (!anim.isPlaying)
  //   {
  //      anim.CrossFade("Allosaurus_Idle");
  //   }

}

//
//var speed : float = 6f;            // The speed that the player will move at.
//
//private var movement : Vector3;                   // The vector to store the direction of the player's movement.
//private var anim : Animator;                      // Reference to the animator component.
//private var playerRigidbody : Rigidbody;          // Reference to the player's rigidbody.
////private var floorMask : int;                      // A layer mask so that a ray can be cast just at gameobjects on the floor layer.
////private var camRayLength : float = 100f;          // The length of the ray from the camera into the scene.
//
//
//function Awake ()
//{
//    // Create a layer mask for the floor layer.
//  //  floorMask = LayerMask.GetMask ("Floor");
//
//    // Set up references.
//    anim = GetComponent (Animator);
//    playerRigidbody = GetComponent (Rigidbody);
//}
//
//
//function FixedUpdate ()
//{
//    // Store the input axes.
//    var h : float = Input.GetAxisRaw ("Horizontal");
//    var v : float = Input.GetAxisRaw ("Vertical");
//
//    // Move the player around the scene.
//    Move (h, v);
//
//    // Turn the player to face the mouse cursor.
////    Turning ();
//
//    // Animate the player.
//    Animating (h, v);
//}
//
//
//function Move (h : float, v : float)
//{
//    // Set the movement vector based on the axis input.
//    movement.Set (h, 0f, v);
//    
//    // Normalise the movement vector and make it proportional to the speed per second.
//    movement = movement.normalized * speed * Time.deltaTime;
//
//    // Move the player to it's current position plus the movement.
//    playerRigidbody.MovePosition (transform.position + movement);
//}
//
//
//
//function Animating (h : float, v : float)
//{
//    // Create a boolean that is true if either of the input axes is non-zero.
//    var walking : boolean = h != 0f || v != 0f;
//
//    // Tell the animator whether or not the player is walking.
//    anim.SetBool ("camina", walking);
//}
