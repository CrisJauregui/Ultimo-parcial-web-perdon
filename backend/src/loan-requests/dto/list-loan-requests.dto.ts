import { Type } from "class-transformer";
import { IsIn, IsOptional } from "class-validator";

export class ListLoanRequestDto{
  // TODO BACK-A: agregar las validaciones del filtro opcional indicado en el enunciado.
  // La conversión de la consulta a número ya está preparada.

  //(ya)
  @IsOptional()
  @IsIn(['pending', 'approved', 'rejected'])
  status?: string;


  @Type(() => Number)
  toolId?: number;
}

