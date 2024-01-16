import React from "react";
import immg from './CardImages/faq.png'

export default function FAQ(){
    return(
    <div className="container p-5" style={{ backgroundColor: '#edf8ff', borderRadius: '14px' }}>
            <h2 className="text-center pb-4 mb-3 fw-bold fs-1" style={{ color: '#716dff' }}>Frequently Asked Questions</h2>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                    <img src={immg} alt="no-image" className="img-fluid"/>
                </div>
                <div className="col-lg-8 col-md-6 col-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item rounded-3 m-1">
                            <h2 className="accordion-header fs-2" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    1. What is considered harassment under Indian law?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> Harassment can take many forms, but it's primarily covered under laws like the Indian Penal Code (IPC) and the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013. It includes unwelcome advances, comments, or any act that violates a person's dignity or safety.
</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item m-1">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    2. How can I report harassment or child abuse in India?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    You can report harassment or child abuse to the local police station or contact organizations like Childline (1098) for child abuse cases. For workplace harassment, follow the internal complaints procedure established by your organization, or report to the Internal Complaints Committee (ICC) under the Sexual Harassment at Workplace Act.

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item m-1">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    3. What legal provisions protect children from abuse in India?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                The Protection of Children from Sexual Offences (POCSO) Act, 2012, is a comprehensive law protecting children from sexual abuse. It includes provisions for the speedy trial of such cases and safeguards for the child's identity.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item m-1">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    4. Are there any helplines or organizations that provide support for harassment or abuse victims in India?*

                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Yes, several helplines and organizations offer support, including Roshni, Snehi, and Childline (1098). Additionally, local NGOs and women's commissions often provide assistance.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item m-1">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    5. What should I do if I suspect child abuse but I'm not sure?

                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                If you suspect child abuse, it's important to report it. You can contact Childline (1098) or local child protection authorities to share your concerns. It's their responsibility to investigate and determine if abuse is occurring.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
};
