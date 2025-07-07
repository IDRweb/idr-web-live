import Link from 'next/link';

const BlogSubscribe = () => {

    return (
        <>
          <section className="SubSectionWrap">
            <div className="SubSection">
              <div className="SubContent" data-animate="slide-up">
                <div className="SideTxt">
                  <div>
                    <h6>Stay ahead of the curve.</h6>
                    <h5>Subscribe to the Blog</h5>
                    <input type="email" placeholder="Enter your email"/>
                  </div>
                  <div className="AppBtn">
                  <Link href="/"><button>Submit</button></Link>
                </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};

export { BlogSubscribe };
