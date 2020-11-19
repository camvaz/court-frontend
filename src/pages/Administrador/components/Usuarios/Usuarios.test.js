const { runValidations } = require("./Usuarios")
const testToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjVhMjMyYjlkMmI2M2E5MjZmZmRhZmMxZTQyNmM5ZDBlOTZhODU1ZjI4NzdlNDZkMDgyNDNmNzhhOGNmZTcwZTU1ZmM4YjIzYjZlYjk3NjkiLCJpYXQiOjE2MDEyMzU3NTgsIm5iZiI6MTYwMTIzNTc1OCwiZXhwIjoxNjMyNzcxNzU4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.N9X_uKF3ZYmyuMyf8CTFCVZbJuIN-dTfhgfIN9rJJyUw0zIGDFVXM5nqrYvMYBFF70vu_Kkr5Nk6i8y0pt4NliJ3ViloIBnCRNolRrptvbCvoVWESVlRK3aFBIon4sy7rBv47SXA-V3TGlD1xnoMPp7orgHhi1xK0sO34ZUpOBwHeXXdwrJXzrRO5FuzhFewKn6HDTw4gKEslWlk5P4ZHLoyL423xBzmSe2sLFbCGXaDwJWZORhv-zqQs4ilKpuc2KiZ3hVP2cHDmMa2KgN2ehrbRCVki6vvys2D58MkihPIb3rV_aNKja4GbEFYLb7R6y5R26sWWxAnffkHKWW1F6am8EpyRN74dmxM3YTKghlimRfvW2FeroI_Y28zu9eREADFgKdOrWFWJJUPnYSI292yHg_5vpfibbIr5u4nHijKX2LaGOokLVcS1cJXKKzoVfAPokWgug4Mdh7WlW2Cn-I9kJ91DyXqp1V3kIM18gEqBe2q6YQwrBOAPSZdBCWLwhGFpcADuKF-l4_e4kV4tU82b5GfaeJ9K2R98q2GGCSSF1lD7Jjc6FQkZf1EY_shhYLaL9Z0OQxcUp2uitI5tT913Q2pPyUlm56NNwRFnatWkPSmJLu5M64f9TROZ01ALPw7voQyCZsMhMSpntd1z95JzZn19FhnRj3uOI0wWDc";

test("Dato vacío", () => {
    const formData = {
            name: "",
            email: "a",
            phone: "a",
            password: "a"
   };   
   expect(runValidations(formData, testToken).fold(x => x, x => x))
   .toStrictEqual({res:false, message: 'name', data:{formData, token:testToken}}) 
});

test("Datos no vacíos", () => {
    const formData = {
            name: "a",
            email: "a",
            phone: "a",
            password: "a"
   };   
   expect(runValidations(formData, testToken).fold(x => x, x => x))
   .toStrictEqual({res:true, message: 'Validación exitosa', data:{formData, token:testToken}}) 
});

test("Datos vacíos", () => {
    const formData = {
            name: "",
            email: "",
            phone: "",
            password: ""
   };   
   expect(runValidations(formData, testToken).fold(x => x, x => x))
   .toStrictEqual({res:false, message: 'name', data:{formData, token:testToken}}) 
});

test("Ningún símbolo especial", () => {
    const formData = {
            name: "a",
            email: "bb",
            phone: "001",
            password: "ad"
   };   
   expect(runValidations(formData, testToken).fold(x => x, x => x))
   .toStrictEqual({res:true, message: 'Validación exitosa', data:{formData, token:testToken}}) 
})

test("Token de tamaño esperado", () => {
    const formData = {
            name: "a",
            email: "bb",
            phone: "001",
            password: "ad"
   };   
   expect(runValidations(formData, testToken).fold(x => x, x => x))
   .toStrictEqual({res:true, message: 'Validación exitosa', data:{formData, token:testToken}}) 
}) 