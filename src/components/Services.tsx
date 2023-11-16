

export default function Services()
{
    return (
        // <!--==================== SERVICES ====================-->
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>
            
            <div className="services__container container grid">
                {/* <!--==================== SERVICES 1 ====================--> */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-code-branch services__icon"></i>
                        <h3 className="services__title">Web Application Development</h3>
                    </div>

                </div>
                {/* <!--==================== SERVICES 2 ====================--> */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-wrench services__icon"></i>
                        <h3 className="services__title">Maintenance <br/> and Support</h3>
                    </div>

                    
                </div>
                {/* <!--==================== SERVICES 3 ====================--> */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-server-network services__icon"></i>
                        <h3 className="services__title">API Development and Integration</h3>
                    </div>
                 
                </div>
            </div>
        </section>
    )
}