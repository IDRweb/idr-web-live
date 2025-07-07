import Link from 'next/link';
import Collapsible from 'react-collapsible';

export const Faq = () => {

    return (
        <>
        
        <div className="FaqBlocks">
          <div className='FaqBlockAccordions'>
            <Collapsible triggerTagName="h3" trigger="Pregunta?">
                <p>
                Resposta
                </p>
            </Collapsible>
            <Collapsible triggerTagName="h3" trigger="Pregunta?">
                <p>
                Resposta
                </p>
            </Collapsible>
            <Collapsible triggerTagName="h3" trigger="Pregunta?">
                <p>
                Resposta
                </p>
            </Collapsible>
          </div>
        </div>

        </>
    );
};
