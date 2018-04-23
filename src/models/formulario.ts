export interface FormularioInterface {
    // modificar valores opcionales cuando se valide desde el dashboard
    id?: string;
    categoriaId?: string;
    version?: number;
    // cambiar tipo de campo cuando se defina la clase
    campos?: any[];
}

export class Formulario {
    constructor(formulario: FormularioInterface) {
        // llenar campos segun sea necesario
    }
}