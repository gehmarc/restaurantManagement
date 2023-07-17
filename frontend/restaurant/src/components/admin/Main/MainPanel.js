import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import e from './img/3.jpeg'

function MainPanel(){

    useEffect(() => {
        const doc = document.querySelector('#mainPanel');
        const resize = document.querySelector('#resize');

        resize.addEventListener('mousedown', resizer);

        function resizer(e){
            let prevX = e.clientX
            
            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);

            function mousemove(e){
                const rec = doc.getBoundingClientRect();
                doc.style.width = rec.width -(prevX - e.clientX) + 'px';

            }
            prevX = e.clientX;

            function mouseup(){
                window.removeEventListener('mousedown', resizer);
                window.removeEventListener('mousemove', mousemove);
            }

        }
        
    })

    return(
        <div id="mainPanel">
            <div id = 'resize'></div>
            <div id="upper">
                <div className="title">
                    <h4>Search Platform by Category</h4>
                </div>
                <div className = "class">
                    <span className="cat">Foods</span>
                </div>
            </div>
            <div id="lower">
                <div className="lowerWrapper">
                    <span className ="fxn"><Link to="chat-with-admin">Contact Admin</Link></span>
                    <span className ="fxn">Switch User</span>
                    <span className ="fxn">Settings</span>
                    <span className ="fxn"><Link to = '/create-account'>Create account</Link></span>
                    <span className ="fxn"><Link to = '/login'>Log In</Link></span>
                    <div className ="fxn user">
                        <div className="me-icon"><img src={e} alt="user"></img></div>
                        <div className="name-pseudo">
                            <p className="name">Asgaurd Man</p>
                            <p className="pseudo"><i>@risenagain</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPanel;