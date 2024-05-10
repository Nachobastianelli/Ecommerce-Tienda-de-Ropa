import React, { useState } from 'react';

function Home() {
    const [username, setUsername] = useState('Francesco'); //logica segun login/registerd
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileUpload = (files) => {
        if (files && files[0]) {
            const imageUrl = URL.createObjectURL(files[0]);
            setImageUrl(imageUrl);
        }
    };

    return (
        <div className='container' style={{backgroundColor: '#f2f2f2', height: '100vh', margin: '0', padding: '0'}}>
            <div className='cabecera' style={{ textAlign: 'center', fontFamily: 'Playfair Display', fontSize: '1rem'}}>
                <h1 style={{textDecoration: 'underline'}}>WAIKIKI || Idumentaria </h1>
                <hr style={{width: '100%', border: '1px solid black'}}/>

                <div className='user-container' style={{ position: 'absolute', top: '23px', right: '20px' }}>
                    <div style={{ border: '1px solid black', borderRadius: '20px', padding: '8px', backgroundColor: '#f0f0f0' }}>
                        Usuario: {username}
                    </div>
                </div>
            </div>


            <div className='sidebar' style={{ fontSize: '25px', position: 'absolute', top: '90px', left: '15px', bottom: 0, backgroundColor: '#f0f0f0', borderRight: '2px solid black' }}> 
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ padding: '40px', borderBottom: '0px solid black', cursor: 'pointer' }}>Inicio</li>
                    <li style={{ padding: '40px', borderBottom: '0px solid black', cursor: 'pointer' }}>Accesorios</li>
                    <li style={{ padding: '40px', borderBottom: '0px solid black', cursor: 'pointer' }}>Remeras</li>
                    <li style={{ padding: '40px', borderBottom: '0px solid black', cursor: 'pointer' }}>Buzos</li> 
                </ul>
            </div>

            <div className='products' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                <div className='product' style={{ border: '5px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', textAlign: 'center', cursor: 'pointer' }}>
                    <h3>Producto 1</h3>
                    <p>$27.000</p>
                    <img src={imageUrl} alt='Producto 1' style={{width: '250px', display: 'flex'}} />
                    <button onClick={() => document.getElementById('fileInput').click()}>Agregar Foto</button>
                </div>
                <div className='product' style={{ border: '5px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', textAlign: 'center', cursor: 'pointer'}}>
                    <h3>Producto 2</h3>
                    <p>$54.000</p>
                    <img src={imageUrl} alt='Producto 2' style={{width: '250px', display: 'flex'}} />
                    <button onClick={() => document.getElementById('fileInput').click()}>Agregar Foto</button>
                </div>
                <div className='product' style={{ border: '5px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', textAlign: 'center', cursor: 'pointer'}}>
                    <h3>Producto 3</h3>
                    <p>$120.000</p>
                    <img src={imageUrl} alt='Producto 3' style={{width: '250px', display: 'flex'}} />
                    <button onClick={() => document.getElementById('fileInput').click()}>Agregar Foto</button>
                </div>
            </div>

            <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => handleFileUpload(e.target.files)}
            />
        </div>
    );
}

export default Home;
