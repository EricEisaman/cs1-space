import alongpath from "../../com/components/alongpath";

export default (() => {
  function thruster(offset) {
    const t = document.createElement("a-sphere");
    t.setAttribute("radius", "0.6");
    t.setAttribute("position", offset);
    t.setAttribute("shader-frog", "name:Thruster_Shader");
    return t;
  }

  function thrusterSound() {
    const s = document.createElement("a-sound");
    s.setAttribute(
      "src",
      "https://cdn.glitch.com/4b320546-5c89-4b01-9e73-9a6ba6ffff98%2FThruster.mp3?v=1574344231359"
    );
    s.setAttribute("loop", true);
    s.setAttribute("volume", 5);
    s.setAttribute("autoplay", true);
    return s;
  }

  document.addEventListener("gameStart", e => {
    const cyl = document.createElement("a-cylinder");
    cyl.setAttribute("radius", "0.6");
    cyl.setAttribute("height", "3");
    cyl.setAttribute("animate", "");
    cyl.setAttribute("shader-frog", "name:Thruster_Shader");
    CS1.scene.appendChild(cyl);

    CS1.shaderfrog.Thruster_Shader.uniforms.backgroundColor.value.r = "0.2";
    CS1.shaderfrog.Thruster_Shader.uniforms.backgroundColor.value.g = "0.4";
    CS1.shaderfrog.Thruster_Shader.uniforms.backgroundColor.value.g = "1";
    const ship = document.querySelector("#max-delta");
    ship.appendChild(thruster("0 0 5"));
    ship.appendChild(thruster("3.2 0 -4"));
    ship.appendChild(thruster("-3.2 0 -4"));
    ship.appendChild(thrusterSound());
    const ship2 = ship.cloneNode();
    ship2.setAttribute("id", "max-delta2");
    ship2.appendChild(thruster("0 0 5"));
    ship2.appendChild(thruster("3.2 0 -4"));
    ship2.appendChild(thruster("-3.2 0 -4"));
    ship2.setAttribute("alongpath", "curve: #track2; dur:3000");
    ship2.appendChild(thrusterSound());
    CS1.scene.appendChild(ship2);
    const ship3 = ship.cloneNode();
    ship3.setAttribute("id", "max-delta3");
    ship3.appendChild(thruster("0 0 5"));
    ship3.appendChild(thruster("3.2 0 -4"));
    ship3.appendChild(thruster("-3.2 0 -4"));
    ship3.setAttribute("alongpath", "curve: #track3; dur:3000");
    ship3.appendChild(thrusterSound());
    CS1.scene.appendChild(ship3);

    CS1.callbacks["gold"] = e => {
      gold.setAttribute("rotation", "0 0 0");
    };
    const gold = document.querySelector("#gold");
    gold.components.grabbable.data.postRelease = "gold";
  });

  AFRAME.registerComponent("animate", {
    schema: {
      color: { default: "red" }
    },

    init: function() {},

    tick: function(t, dt) {
      const v = Math.sin(t / 600);
      this.el.object3D.position.y = 4 * v + 8;
      this.el.object3D.rotateY(v / 4);
    }
  });
})();

