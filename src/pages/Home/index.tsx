import { Play } from "phosphor-react";
import { 
    StartCountdownButton,
    CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    Separator, 
    MinutesAmountInput,
    TaskInput
} from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="submit">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        list="task-sugestions"
                        placeholder="Dê um nome ao seu projeto"
                    />

                    <datalist id="task-sugestions">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                        <option value="Projeto 4"/>
                    </datalist>

                    <label htmlFor="task">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton 
                    disabled
                    type="submit"
                >
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}