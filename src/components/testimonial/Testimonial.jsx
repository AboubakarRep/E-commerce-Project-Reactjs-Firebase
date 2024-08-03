
const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-700 body-font mb-10">
                {/* main */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading */}
                    <h1 className='text-center text-3xl font-bold text-gray-800'>Témoignages</h1>
                    {/* para */}
                    <h2 className='text-center text-2xl font-semibold mb-10'>
                        Découvrez ce que nos <span className='text-pink-500'>clients</span> disent de notre service
                    </h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center bg-gray-50 p-6 rounded-lg shadow-lg">
                                <img 
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-300 bg-gray-100"
                                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                                <p className="leading-relaxed text-gray-600">
                                    L'expérience avec Ivoire Code Center a été exceptionnelle. Le service est rapide et professionnel, avec une équipe dédiée qui répond à toutes les attentes. Je recommande vivement!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Wolle Junior</h2>
                                <p className="text-gray-500">Senior Product Owner</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center bg-gray-50 p-6 rounded-lg shadow-lg">
                                <img 
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-300 bg-gray-100"
                                    src="https://plus.unsplash.com/premium_photo-1661730351855-346069d20ef5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                                <p className="leading-relaxed text-gray-600">
                                    Le service client d'Ivoire Code Center est incomparable. Ils offrent des solutions efficaces et sont toujours prêts à aider. Une expérience que je n'hésiterai pas à répéter.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Beatrice Kouassi</h2>
                                <p className="text-gray-500">Backend Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center bg-gray-50 p-6 rounded-lg shadow-lg">
                                <img 
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-300 bg-gray-100"
                                    src="https://images.unsplash.com/photo-1495681796091-d84e65e2ad51?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                                <p className="leading-relaxed text-gray-600">
                                    Excellent service! L'équipe d'Ivoire Code Center est très professionnelle et offre des solutions sur mesure. Le processus de commande est fluide et les résultats sont toujours à la hauteur des attentes.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Allassane Toure</h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
