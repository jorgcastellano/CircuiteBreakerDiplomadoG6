import axios, {AxiosResponse} from "axios/index";

enum CircuitBreakerState {
    Closed,
    Open,
    HalfOpen,
}

export class CircuitBreakerService {
    private state: CircuitBreakerState = CircuitBreakerState.Closed;
    private failureCount: number = 0;
    private readonly failureThreshold: number = 3;
    private readonly resetTimeout: number = 5000;
    private lastFailureTime: number | null = null;

    async execute<T>(apiCall: () => Promise<AxiosResponse<T>>): Promise<T> {
        switch (this.state) {
            case CircuitBreakerState.Closed:
                try {
                    const response = await apiCall();
                    this.onSuccess();
                    return response.data;
                } catch (error) {
                    this.onFailure();
                    throw error;
                }
            case CircuitBreakerState.Open:
                this.tryToReset();
                throw new Error('El Circuit Breaker está abierto. Las solicitudes no se están procesando.');
            case CircuitBreakerState.HalfOpen:
                try {
                    const response = await apiCall();
                    this.onSuccess();
                    return response.data;
                } catch (error) {
                    this.onFailure();
                    throw error;
                }
        }
    }

    private onSuccess() {
        this.failureCount = 0;
        this.lastFailureTime = null;
    }

    private onFailure() {
        this.failureCount += 1;
        this.lastFailureTime = Date.now();

        if (this.failureCount >= this.failureThreshold) {
            this.state = CircuitBreakerState.Open;
            console.log('Circuit Breaker está abierto. A la espera del reinicio...');
            setTimeout(() => this.state = CircuitBreakerState.HalfOpen, this.resetTimeout);
        }
    }

    private tryToReset() {
        if (this.lastFailureTime && Date.now() - this.lastFailureTime > this.resetTimeout) {
            this.state = CircuitBreakerState.HalfOpen;
            console.log('Circuit Breaker está medio abierto. Envíe una nueva solicitud de prueba...');
        }
    }
}
