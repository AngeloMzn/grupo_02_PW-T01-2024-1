import Content from "./Content";
import Tittle from "./Tittle";

interface ExternalInfoProps {
    description: string;
    children: React.ReactNode;
}

export default function ExternalInfo({description, children}: ExternalInfoProps) {
    return (
        <>
           <Tittle description={description}/>
           <Content>{children}</Content>
        </>
    );
}