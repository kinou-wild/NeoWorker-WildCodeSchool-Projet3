import React from 'react';
import { Link } from 'react-router-dom';

const UpdateNeoworkerCard = ({ dataNeoworker, onClick }) => {

    return (
        <div>
            <Form className="formulaire-creation-neoworker"  >
                <FormGroup>
                    <Input disabled style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" id="note"
                        value={neoworker.note}
                    />
                </FormGroup>
            </Form>
        </div>
    )
}

export default UpdateNeoworkerCard