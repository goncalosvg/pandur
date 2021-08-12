import { useState, useEffect, useRef } from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

import styles from './Navigation.module.css';

const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function Component() {
    
    /* isLoggedIn State */
    const [user, loading, error] = useAuthState(firebase.auth());

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdown = useRef<HTMLInputElement>(null);

    let assignClassOpenDropdown = showDropdown ? `${styles["active"]}` : "";

    useEffect(() => {
      if (!showDropdown) return;
      function handleClick(event: any) {
        if (dropdown.current && !dropdown.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }, [showDropdown]);

    const [showModal, setShowModal] = useState(false);
    let assignClassOpenModal = showModal ? `${styles["active"]}` : "";

    return (
        <header>

            <div className={`${styles["modaloverlay"]} ${assignClassOpenModal}`}>
                <div className={styles.modalclose} onClick={() => setShowModal(false)}></div>
                <div className={styles.modal}>
                    <div className={styles.close} onClick={() => setShowModal(false)}></div>
                    <div className={styles.content}>
                        <h2>Sign up</h2>
                        <p>Create an account using one of these!</p>
                        <div className={styles.aligncenter}><StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /></div>
                    </div>
                </div>
            </div>

            <nav id={styles.nav}>
                <div className="wrapper">
                    <div className={styles.content}>

                        <div>
                            {user
                                ? <div className={styles.profilepicturelogged}><img src={`${user.photoURL}`} alt="User profile picture"></img></div>
                                : <div className={styles.profilepicture}></div>
                            }
                            <input className={styles.searchbar} type="text" name="search" placeholder="Search for a question or topic"/>
                        </div>

                        <div className={styles.alignright}>
                            <button type="button" className={styles.dropdowntoggle} onClick={() => setShowDropdown(b => !b)}>
                                <div className={styles.notifications}>
                                    <svg width="25" height="39" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.0758 13.4931C29.0758 15.848 29.6982 17.236 31.0678 18.8355C32.1058 20.0139 32.4375 21.5265 32.4375 23.1675C32.4375 24.8067 31.899 26.3628 30.82 27.6261C29.4075 29.1406 27.4154 30.1075 25.3823 30.2756C22.4361 30.5267 19.4881 30.7383 16.5009 30.7383C13.5119 30.7383 10.5657 30.6117 7.61954 30.2756C5.58461 30.1075 3.59254 29.1406 2.18187 27.6261C1.10291 26.3628 0.5625 24.8067 0.5625 23.1675C0.5625 21.5265 0.896065 20.0139 1.93217 18.8355C3.34469 17.236 3.9261 15.848 3.9261 13.4931V12.6943C3.9261 9.54064 4.71249 7.47847 6.33187 5.45974C8.7395 2.51568 12.5988 0.75 16.4171 0.75H16.5848C20.4851 0.75 24.4692 2.60066 26.8358 5.67125C28.3714 7.64843 29.0758 9.62373 29.0758 12.6943V13.4931ZM11.0132 34.6141C11.0132 33.6699 11.8797 33.2374 12.681 33.0523C13.6183 32.854 19.3299 32.854 20.2673 33.0523C21.0686 33.2374 21.9351 33.6699 21.9351 34.6141C21.8885 35.513 21.3612 36.3099 20.6325 36.816C19.6877 37.5525 18.579 38.0189 17.4199 38.187C16.7788 38.2701 16.149 38.2719 15.5303 38.187C14.3693 38.0189 13.2606 37.5525 12.3176 36.8141C11.5871 36.3099 11.0598 35.513 11.0132 34.6141Z" fill="#1F60F3"/>
                                    </svg>
                                </div>
                            </button>
                            {showDropdown && (
                            <div className={`${styles["dropdown"]} ${styles["right"]} ${assignClassOpenDropdown}`} ref={dropdown}>
                                <ul>
                                    <li>
                                        <h3>Your account</h3>
                                        <p>Check your account definitions.</p>
                                    </li>
                                    <li>
                                        <h3>Your account</h3>
                                        <p>Check your account definitions.</p>
                                    </li>
                                    <li>
                                        <h3>Your account</h3>
                                        <p>Check your account definitions.</p>
                                    </li>
                                    <div className="align-center"><a href="#">View all notifications</a></div>
                                </ul>
                            </div>
                            )}

                            {user
                                ? <button className={styles.askaquestion}>Ask a question</button>
                                : <button className={styles.askaquestion} onClick={() => setShowModal(b => !b)}>Ask a question</button>
                            }

                        </div>

                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Component;