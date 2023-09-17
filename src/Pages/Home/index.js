import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Side from '../../Components/Assests/slider.png'
import './Style.css'
function Home() {
  return (
    <>
      <Header />
      { /* First PART START HERE */ }
      <div className='bgpic'>
        <div className='container' >
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0 my-3">

              <div className="card-body">
                <h1 className="card-title" style={{ color: "#fff" }}>
                  Special title treatment
                  Special title treatment
                </h1>
                <p className="card-text pra" style={{ fontSize: 18, color: "#fff" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>

              </div>

            </div>
            <div className="col-sm-6 my-2">

              <div className="card-body">

                <img src={Side}
                  width={600}
                  height={500}


                />
              </div>
            </div>
          </div>

        </div>



      </div>
      { /* First PART End HERE */ }

      { /* SECOND PART START HERE */ }

      <div className='bgpic my-3'>
        <div className='container' >
          <div className="row">

            <div className="col-sm-6 my-2">

              <div className="card-body">

                <img src={Side}
                  width={600}
                  height={500}


                />
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0 my-5">

              <div className="card-body">
                <h1 className="card-title" style={{ color: "#fff" }}>
                  Special title treatment
                  Special title treatment
                </h1>
                <p className="card-text pra" style={{ fontSize: 18, color: "#fff" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>

              </div>

            </div>

          </div>

        </div>
     </div>
     { /* Second PART End HERE */ }

   { /* THIRD PART START HERE */ }

      <div className='bgpic'>
        <div className='container' >
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0 my-5">

              <div className="card-body">
                <h1 className="card-title" style={{ color: "#fff" }}>
                  Special title treatment
                  Special title treatment
                </h1>
                <p className="card-text pra" style={{ fontSize: 18, color: "#fff" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>

              </div>

            </div>
            <div className="col-sm-6 my-2">

              <div className="card-body">

                <img src={Side}
                  width={600}
                  height={500}


                />
              </div>
            </div>
          </div>

        </div>
      </div>

      { /* THIRD PART End HERE */ }







      <Footer />
    </>
  )
}

export default Home