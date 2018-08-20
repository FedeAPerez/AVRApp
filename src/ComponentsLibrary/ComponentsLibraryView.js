// ComponentsLibraryView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { Text, BoldText } from './Text';
import Title from './Title';
import { Section, SimpleSection } from './Section';
import { TextGlobe, TextGlobeKdabra } from './TextGlobe';
import Button from './Button';
import CheckBox from './CheckBox';
import TextInput from './TextInput';
import UserDisplay from './UserDisplay';
import Setting from './Setting';
import { Event, EventV2 } from './Event';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ComponentsLibraryView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBusiness: false
        };
    }
    handleButtonsClick(e) {
        e.preventDefault();
    }

    handleBusinessChange(e) {
        e.preventDefault();
        this.setState({ isBusiness : !this.state.isBusiness });
    }

    handleShowInfo(e) {
    }
    render() {
        return(
            <main>
                <Section>
                    <Title h1>Librería de componentes - KDABRA</Title>
                    <Text>Esta librería busca unificar los componentes que se usan en todo el sitio</Text>
                </Section>
                <SimpleSection>
                    <Title h2>Eventos</Title>
                    <SimpleSection>
                    <Event date="12/03/1995" hour="18:00" userName="Federico Pérez" />
                    <Event date="08/05/1996" hour="19:00" userName="Nicolás Yazky" />
                    <EventV2 date="08/05/1996" hour="19:00" userName="Nicolás Yazky" description="Demo de mejoras." />
                    </SimpleSection>
                </SimpleSection>
                <Section>
                    <Title h2>Configuraciones de Usuario</Title>
                    <Setting settingName="Mensaje de Bienvenida" />
                    <Setting settingName="Horario de Atención" settingDescrption="Para mostrar tu horario de atención" />
                    <Setting settingName="Cerrar Sesión" />
                </Section>
                <Section>
                    
                    <Title h2>Display de Usuario</Title>
                    <UserDisplay
                        onClick = { this.handleShowInfo.bind(this) }
                        userShowName="Federico"
                        userName = "fede"
                        userDescription="Fundador de KDABRA - Atentos a las novedades!"
                        userTag = "Emprendedor"
                    />

                    <UserDisplay
                        onClick = { this.handleShowInfo.bind(this) }
                        userShowName="KDABRA"
                        userName = "gokdabra"
                    />
                </Section>
                <Section>
                    <Title h2>Texto</Title>
                    <Text>Este es un mensaje de muestra.</Text>
                    <Text>Este es un texto <BoldText>destacado</BoldText> que sigue.</Text>
                </Section>
                <Section>
                    <Title h2>Globos</Title>
                    
                    <TextGlobeKdabra>Este es un mensaje de KDABRA</TextGlobeKdabra>

                    <TextGlobe> Este es un mensaje de prueba</TextGlobe>
                    
                    <TextGlobe sender> Este es un mensaje de prueba del usuario</TextGlobe>
                </Section>
                <Section>
                    <Title h2>Ingreso de texto</Title>
                    <TextInput placeholder="Usuario" /> 
                    <TextInput placeholder="Enviar un mensaje..." />
                </Section>
                <Section>
                    <Title h2>Botones</Title>
                    <Button onClick={this.handleButtonsClick} disabled>Completá los datos</Button>
                    <Button onClick={this.handleButtonsClick}>Crear una cuenta</Button>
                    <Button primary onClick={this.handleButtonsClick}>Ingresar</Button>
                    <CheckBox onClick={this.handleBusinessChange.bind(this)} checked={this.state.isBusiness} >Soy una empresa</CheckBox>

                </Section>
            </main>
        );
    }
}

export default ComponentsLibraryView;