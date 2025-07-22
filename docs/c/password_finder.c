#include <stdio.h>
#include <string.h>

int main() {
    char input[50];
    const char *hidden_password = "supersecreto123";

    printf("Introduce la clave: ");
    scanf("%s", input);

    if (strcmp(input, hidden_password) == 0) {
        printf("Correcto! Ahora ve a la web y usa esta clave para desbloquear la flag.\n");
    } else {
        printf("Incorrecto. Intenta de nuevo.\n");
    }

    return 0;
}
