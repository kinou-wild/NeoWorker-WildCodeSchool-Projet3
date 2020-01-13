import React from 'react';
import {Link} from 'react-router-dom'


const OneNeoworkerCard = ({neoworker}) => {
    console.log(neoworker)
    return(
        <div>
            <div className="admin-neoworker">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil picture' />
            </div>
            <h1 className='admin-h1'>Creation d'un NeoWorker<span className='textModif'>:</span></h1>
            <div className='body'>
                <Form className="formulaire-creation-neoworker" onSubmit={onSubmit} >
                    <FormGroup>
                        <Input style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" id="note"
                            value={freelancer.note}
                            onChange={(e) => { setFreelancer({ ...freelancer, note: e.target.value }) }} />
                    </FormGroup>
                </Form>



            
            <Link to='/admin/neoworker/liste'>
                <button>back to list</button>
            </Link>
        </div>
    )
}
export default OneNeoworkerCard