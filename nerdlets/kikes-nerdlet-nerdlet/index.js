import React from 'react';

import logo from "./img/logo.png";
import newrelic from "./img/newrelic.png";
import wigilabs from "./img/wigilabs.png";
import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import n1 from "./img/n1.png";


export default class KikesNerdletNerdletNerdlet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      r1c1: 1000,
      r3c1: 800,
      r5c1: 600,
      r7c1: 500,

      r1c2: 90,
      r3c2: 70,
      r5c2: 50,
      r7c2: 40,

      r1c3: 250,
      r3c3: 220,
      r5c3: 200,
      r7c3: 100,

      r2c1: 250,
      r4c1: 220,
      r6c1: 200,
      r8c1: 100,

      r2c2: 120,
      r4c2: 112,
      r6c2: 110,
      r8c2: 90,
    };
  }

  Clock(a, b, c, d, time, inc) {

    let self = this;

    setInterval(function() {

      var min = 0.1,
          max = 2.9;
      var rand = Math.floor(Math.random() * (max - min) + min);

      if(rand == 2) {
        self.setState({
          [a]: self.state[a] + inc,
          [b]: Math.floor(self.state[b] + inc * 0.7),
          [c]: Math.floor(self.state[c] + inc * 0.5),
          [d]: Math.floor(self.state[d] + inc * 0.3)
        });
      } else {
        self.setState({
          [a]: self.state[a] + inc
        });
      }
    }, time * 1000);
  }

  componentDidMount() {

    this.Clock("r1c1", "r3c1", "r5c1", "r7c1", 0.5, 5);
    this.Clock("r1c2", "r3c2", "r5c2", "r7c2", 1.5, 10);
    this.Clock("r1c3", "r3c3", "r5c3", "r7c3", 3.2, 10);

    this.Clock("r2c1", "r4c1", "r6c1", "r8c1", 1.2, 10);
    this.Clock("r2c2", "r4c2", "r6c2", "r8c2", 5, 20);
  }

  render() {
    return (
      <div class="App">
        <header class="header">
          <div class="header-inner">
            <img src={logo} class="logo" />
            <h1>El camino del huevo</h1>
          </div>
        </header>

        <section class="gray">
          <div class="gray-inner">
            <p>Instrumentado por</p>&nbsp;&nbsp;
            <img src={newrelic} class="newrelic"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <p>Producido por</p>&nbsp;&nbsp;
            <img src={wigilabs} class="wigilabs" />
          </div>
        </section>

        <section class="content">
          <div class="table">
            <div class="column" style={{maxWidth:'280px'}}></div>
            <div class="column">
              <p class="text color">Todos los depósitos</p>
            </div>
            <div class="column">
              <p class="text">Bogotá</p>
            </div>
            <div class="column">
              <p class="text">Medellín</p>
            </div>
          </div>

          <div class="table">
            <div class="column" style={{maxWidth:'280px'}}>
              <img src={image1} class="image" />
              <img src={image2} class="image" />
              <img src={image3} class="image" />
              <img src={image4} class="image" />
            </div>
            <div class="column">
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r1c1}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column green">
                      <span>{this.state.r1c2}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r1c3}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r2c1}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r2c2}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
                <img src={n1} class="n1" />
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.r3c1}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r3c2}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r3c3}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r4c1}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r4c2}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r5c1}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r5c2}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r5c3}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r6c1}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column red">
                      <span>{this.state.r6c2}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>s
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r7c1}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column green">
                      <span>{this.state.r7c2}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r7c3}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r8c1}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r8c2}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.r1c1 - 300}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r1c2 - 30}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r1c3 - 80}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r2c1 - 80}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r2c2 - 50}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>161</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r3c1 - 300}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r3c2 - 30}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r3c3 - 80}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r4c1 - 80}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column red">
                      <span>{this.state.r4c2 - 50}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>190</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r5c1 - 300}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column green">
                      <span>{this.state.r5c2 - 30}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r5c3 - 80}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r6c1 - 80}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r6c2 - 50}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.r7c1 - 300}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r7c2 - 30}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r7c3 - 80}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r8c1 - 80}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r8c2 - 50}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.r1c1 - 400}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r1c2 - 40}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r1c3 - 90}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r2c1 - 90}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r2c2 - 60}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r3c1 - 400}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r3c2 - 40}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r3c3 - 90}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r4c1 - 90}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column red">
                      <span>{this.state.r4c2 - 60}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r5c1 - 400}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column green">
                      <span>{this.state.r5c2 - 40}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r5c3 - 90}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r6c1 - 90}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r6c2 - 60}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.r7c1 - 400}</span>
                      <p>plus AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r7c2 - 40}</span>
                      <p>AA C&C x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r7c3 - 90}</span>
                      <p>AA C&C x 30</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.r8c1 - 90}</span>
                      <p>AA x 12</p>
                    </div>
                    <div class="column">
                      <span>{this.state.r8c2 - 60}</span>
                      <p>Orgánico x 15</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
