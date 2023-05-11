echo off
REM Путь к тестируемой комманде передается через первый аргумент коммандной строки
SET MyProgram="%~1"

REM Защита от запуска без агрумента, задающего путь к программе
if %MyProgram%=="" (
echo Please specify path to programm
exit /B 1
)
REM Проверка перевода числа из двоичной в десятичную
call ts-node %MyProgram% "00101" > tempFile.txt || goto err
fc successfullyTest.txt tempFile.txt > nul || goto err
echo Test 1 passed successfully

REM Проверка числа в другой системе счисления
call ts-node %MyProgram% "435" > tempFile.txt || goto err
fc nonBinaryNumber.txt tempFile.txt > nul || goto err
echo Test 2 passed successfully

REM Проверка попытки работы с текстом
call ts-node %MyProgram% "QA Automation" > tempFile.txt || goto err
fc nonBinaryNumber.txt tempFile.txt > nul || goto err
echo Test 3 passed successfully

REM Проверка строки с цифрами и с буквами
call ts-node %MyProgram% "101AD" > tempFile.txt || goto err
fc nonBinaryNumber.txt tempFile.txt > nul || goto err
echo Test 4 passed successfully

REM Выполнить программу без аргументов
call ts-node %MyProgram% > tempFile.txt || goto err
fc fileWithoutArgument.txt tempFile.txt > nul || goto err
echo Test 5 passed successfully

REM Все тесты прошли успешно
echo All tests passed successfully

REM Tests ok
exit /B 0

REM Tests failed
:err
echo Test failed
exit /B 1