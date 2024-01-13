import SubsTools from "../../components/Degerlendirmeler/SubsTools";
import SuccessModel from "../../components/Degerlendirmeler/SuccessModel";
import TestsAndInterviews from "../../components/Degerlendirmeler/TestsAndInterviews";


function Degerlendirmeler() {
  return (
    <>
      <section className="py-5">
        <div className="position-relative mt-12">
          <div className="container text-center">
            <div className="mw-5xl mx-auto">
              <h3>
                <span className="text-secondary"
                  style={{ fontWeight: 'normal' }}> Yetkinlik</span><span className="fw-normal text-info"
                    style={{ fontWeight: 'normal' }}>lerini</span><span className="fw-normal text-info"
                      style={{ fontWeight: 'normal' }}> ücretsiz ölç,</span><span className="text-secondary"
                        style={{ fontWeight: 'normal' }}> bilgi</span><span className="fw-normal text-info"
                          style={{ fontWeight: 'normal' }}>lerini</span><span className="fw-normal text-info" style={{ fontWeight: 'normal' }}> test et.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <SuccessModel />
      <SubsTools />
      <TestsAndInterviews />
    </>
  )
}


export default Degerlendirmeler;
