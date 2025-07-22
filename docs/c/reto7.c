#include <stdio.h>
#include <string.h>

int main() {
    char input[50];
    const char *correct_password = "supersecreto123";
    const char *flag = "flag{ingenieria_inversa}";

    printf("Introduce la clave secreta: ");
    scanf("%s", input);

    if (strcmp(input, correct_password) == 0) {
        printf("\n✅ Acceso concedido!\n");
        printf("La flag es: %s\n", flag);
    } else {
        printf("\n❌ Contraseña incorrecta.\n");
    }

    printf("\nPresiona ENTER para cerrar...");
    getchar();
    getchar();
    return 0;
}
