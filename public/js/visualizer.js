// THREE JS FUNCTIONS

// Initializes Three Scene
function init() {
    container = document.createElement('div');
    document.body.appendChild(container);

    // Creates Camera for THREE
    camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 850;

    // create leap controller
    controller = new Leap.Controller();

    // Explicitly Connecting Controller
    controller.connect();

    // pass in camera (what we are acting on) and controller (gives us data)
    controls = new THREE.LeapTrackballControls(camera, controller);

		controls.rotationSpeed = 1.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.8;

		controls.noZoom = false;
		controls.noPan = false;

		controls.staticMoving = false;
		controls.dynamicDampingFactor = 0.3;


    // PARENT NODE
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0xFFFFFF, 1, 15000);

    // GEOMETRICAL SHAPES
    geometry = new THREE.SphereGeometry(450, 8, 6);  // teal
    geometry2 = new THREE.BoxGeometry(1100, 250, 190, 1);  // purple rectangle
    geometry3 = new THREE.IcosahedronGeometry(140, 2);  // orange
    geometry4 = new THREE.CylinderGeometry(50, 170, 550);

    // MATERIALS
    material = new THREE.MeshBasicMaterial({
        color: 0xA8F7FC,
        morphTargets: true,
        wireframe: true
    });
    material2 = new THREE.MeshBasicMaterial({
        color: 0xD1ADCB,
        morphTargets: true,
        wireframe: true
    });
    material3 = new THREE.MeshBasicMaterial({
        color: 0xFFFCE8,
        morphTargets: true,
        wireframe: true
    });
    material4 = new THREE.MeshBasicMaterial({
        color: 0xFF48FD,
        morphTargets: true,
        wireframe: true
    });

    // Outer Sphere Geometry

    for ( var i = 0; i < geometry.vertices.length; i++ ) {
          var vertices = [];
          for ( var v = 0; v < geometry.vertices.length; v++ ) {
            vertices.push( geometry.vertices[ v ].clone() );
            if ( v === i ) {
              vertices[ vertices.length - 1 ].x *= 4;
              vertices[ vertices.length - 1 ].y *= 5;
              vertices[ vertices.length - 1 ].z *= 6;
            }
          }
          geometry.morphTargets.push( { name: "target" + i, vertices: vertices } );
      }


    // RECTANGLE (GEOMETRY2)

    for ( var i = 0; i < geometry2.vertices.length; i++ ) {
          var vertices = [];
          for ( var v = 0; v < geometry2.vertices.length; v++ ) {
            vertices.push( geometry2.vertices[ v ].clone() );
            if ( v === i ) {
              vertices[ vertices.length - 1 ].x *= 4;
              vertices[ vertices.length - 1 ].y *= 5;
              vertices[ vertices.length - 1 ].z *= 6;
            }
          }
          geometry2.morphTargets.push( { name: "target" + i, vertices: vertices } );
      }

    // INNER SPHERE GEOMETRY

    for ( var i = 0; i < geometry3.vertices.length; i++ ) {
          var vertices = [];
          for ( var v = 0; v < geometry3.vertices.length; v++ ) {
            vertices.push( geometry3.vertices[ v ].clone() );
            if ( v === i ) {
              vertices[ vertices.length - 1 ].x *= 5;
              vertices[ vertices.length - 1 ].y *= 4;
              vertices[ vertices.length - 1 ].z *= 6;
            }
          }
          geometry3.morphTargets.push( { name: "target" + i, vertices: vertices } );
      }

    // CYLINDER

    for ( var i = 0; i < geometry4.vertices.length; i++ ) {
          var vertices = [];
          for ( var v = 0; v < geometry4.vertices.length; v++ ) {
            vertices.push( geometry4.vertices[ v ].clone() );
            if ( v === i ) {
              vertices[ vertices.length - 1 ].x *= 4;
              vertices[ vertices.length - 1 ].y *= 5;
              vertices[ vertices.length - 1 ].z *= 3;
            }
          }
          geometry4.morphTargets.push( { name: "target" + i, vertices: vertices } );
      }


    // MESH
    shape1 = new THREE.Mesh(geometry, material);
    shape2 = new THREE.Mesh(geometry2, material2);
    shape3 = new THREE.Mesh(geometry3, material3);
    shape4 = new THREE.Mesh(geometry4, material4);


    // LIGHT
    var light = new THREE.AmbientLight(0x505050);

    var directionalLight = new THREE.DirectionalLight(0xBF210A, 0.7);
    directionalLight.position.set(0, 1, 1);

    // Adding to Scene
    scene.add(shape1, shape2, shape3, shape4, light, directionalLight);

    // RENDERER
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // APPENDS RENDERER TO DOM
    container.appendChild(renderer.domElement);

    // TAKES CARE OF WINDOW RESIZE ISSUES FOR WEBGL
    window.addEventListener('resize', onWindowResize, false);

}

function animate() {
    requestAnimationFrame(animate);
    $(document).on('keydown', function(event) {
      var key = event.which;
      if (key == 39) {
        console.log("Right Arrow");
        controls.update();
      } else if (key == 37) {
        console.log("Left Arrow");
        location.reload();
      }
    })


    // Initial Rotation for each Shape
    shape1.rotation.x += 0.0101450;
    shape1.rotation.y -= 0.0103605;
    shape2.rotation.x -= 0.0101450;
    shape2.rotation.y += 0.0104605;
    shape3.rotation.x += 0.0052450;
    shape3.rotation.y -= 0.0126605;
    shape4.rotation.x -= 0.0251450;
    shape4.rotation.y += 0.0232605;

    // Color Changes
    $(document).on('keypress',function(event) {

        var blue = {r: Math.random(), g: Math.random(), b: Math.random()};
        var red = {r: Math.random(), g: Math.random(), b: Math.random()};
        var green = {r: Math.random(), g: Math.random(), b: Math.random()};
        var purple = {r: Math.random(), g: Math.random(), b: Math.random()};

        shape1.material.color = blue;
        shape2.material.color = red;
        shape3.material.color = green;
        shape4.material.color = purple;

        // on keypress events / changes rotation based on keypress.
        shape1.rotation.x = event.which;
        shape1.rotation.y = event.which;
        shape2.rotation.x = event.which;
        shape2.rotation.y = event.which;
        shape3.rotation.x = event.which;
        shape3.rotation.y = event.which;
        shape4.rotation.x = event.which;
        shape4.rotation.y = event.which;
      }
    );
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); // updates webGL 3D rendering onto 2d surface
    renderer.setSize( window.innerWidth, window.innerHeight );
}
