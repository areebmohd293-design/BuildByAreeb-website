// DARK LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
  document.body.classList.toggle("light");
};

// PARTICLES

tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 80
    },

    color: {
      value: "#00f5ff"
    },

    links: {
      enable: true,
      color: "#00f5ff"
    },

    move: {
      enable: true,
      speed: 2
    }
  }
});

// 3D GLOBE

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  1,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("globe"),
  alpha:true
});

renderer.setSize(500,500);

const geometry = new THREE.SphereGeometry(2,64,64);

const material = new THREE.MeshBasicMaterial({
  color:0x00f5ff,
  wireframe:true
});

const sphere = new THREE.Mesh(
  geometry,
  material
);

scene.add(sphere);

camera.position.z = 5;

function animate(){
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.01;

  renderer.render(scene,camera);
}

animate();