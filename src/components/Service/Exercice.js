import React, { useState, useRef, useEffect } from "react";

const Exercice = () => {
    // Expressions régulières pour valider le format du prénom et de l'email
    const nameRegex = /^[a-zA-Z\- ]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // États pour suivre les valeurs saisies et la validité des champs
    const [firstname, setFirstname] = useState('');
    const [validFirstname, setValidFirstname] = useState(false);
    const [lastname, setLastname] = useState('');
    const [validLastname, setValidLastname] = useState(false);
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    // Références pour accéder aux éléments de formulaire
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const emailRef = useRef(null);

    // Effet initial pour mettre le focus sur le champ de saisie du prénom
    useEffect(() => {
        firstnameRef.current.focus();
    }, []);

    // Effet pour valider l'email à chaque changement
    useEffect(() => {
        setValidEmail(emailRegex.test(email));
    }, [email]);

    // Effet pour valider le prénom à chaque changement
    useEffect(() => {
        setValidFirstname(nameRegex.test(firstname));
    }, [firstname]);

    // Effet pour valider le nom à chaque changement
    useEffect(() => {
        setValidLastname(nameRegex.test(lastname));
    }, [lastname]);

    // Gestionnaire de soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();
        // traitement formulaire
    };

    // Rendu du composant
    return (
        <div>
            <form onSubmit={handleSubmit} className="col-10 mx-auto">
                {/* Champ de saisie du prénom */}
                <div className="form-floating mb-2">
                    <input
                        id="firstname"
                        className={`form-control ${firstname.length < 1 ? 'form-control' : validFirstname ? 'is-valid' : 'is-invalid'}`}
                        type="text"
                        name="firstname"
                        ref={firstnameRef}
                        value={firstname}
                        onChange={(event) => setFirstname(event.target.value)}
                    />
                    <label htmlFor="firstname" className="form-label d-flex">Prénom de l'utilisateur :</label>
                    {/* Message d'erreur en cas de saisie invalide */}
                    <div className="invalid-feedback">
                        Veuillez entrer un prénom valide (au moins 2 caractères).
                    </div>
                </div>
                {/* Champ de saisie du nom */}
                <div className="form-floating mb-2">
                    <input
                        id="lastname"
                        className={`form-control ${lastname.length < 1 ? 'form-control' : validLastname ? 'is-valid' : 'is-invalid'}`}
                        type="text"
                        name="lastname"
                        ref={lastnameRef}
                        value={lastname}
                        onChange={(event) => setLastname(event.target.value)}
                    />
                    <label htmlFor="lastname" className="form-label d-flex">Nom de l'utilisateur :</label>
                    {/* Message d'erreur en cas de saisie invalide */}
                    <div className="invalid-feedback">
                        Veuillez entrer un nom valide (au moins 2 caractères).
                    </div>
                </div>
                {/* Champ de saisie de l'email */}
                <div className="form-floating mb-2">
                    <input
                        id="email"
                        className={`form-control ${email.length < 1 ? 'form-control' : validEmail ? 'is-valid' : 'is-invalid'}`}
                        type="email"
                        name="email"
                        ref={emailRef}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="email" className="form-label d-flex">Email de l'utilisateur :</label>
                    {/* Message d'erreur en cas de saisie invalide */}
                    <div className="invalid-feedback">
                        Veuillez entrer une adresse email valide.
                    </div>
                </div>
                {/* Bouton de soumission du formulaire */}
                <input className="btn btn-primary" type="submit" value="envoyer" />
            </form>
        </div>
    );
};

export default Exercice;
