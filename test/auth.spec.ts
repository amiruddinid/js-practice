/* eslint-disable @typescript-eslint/no-explicit-any */
import request from 'supertest';
import app from '../app';
import jwt from 'jsonwebtoken'
import { UsersModel } from '../app/models/users';

let server: any;
let token: string;

const user = {
    nama: 'test123',
    email: 'test123@test.com',
    password: '12345',
    avatar: null
}

beforeAll((done) => {
    server = app.listen(8000, () => {
        done()
    })
})

describe('POST /api/v1/register', () => {
    // 1. Berhasil Register,
    it('should response with 201 status code', async () => (
        request(server)
            .post('/api/v1/register')
            .send(user)
            .set('Accept', 'application/json')
            .then((res: { statusCode: unknown; body: unknown; }) => {
                expect(res.statusCode).toBe(201)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        message: "Berhasil Register",
                        data: {
                            id: expect.any(Number),
                            nama: user.nama,
                            email: user.email,
                        }
                    })
                )
            })
    ))
    // 2. Gagal Register, emailnya sudah ada di database
    it('should response with 409 status code', async () => (
        request(server)
            .post('/api/v1/register')
            .send(user)
            .set('Accept', 'application/json')
            .then((res: { statusCode: unknown; body: unknown; }) => {
                console.log(res.body)
                expect(res.statusCode).toBe(409)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        message: "Email sudah terdaftar!",
                    })
                )
            })
    ))
    // 3. validasinya gagal, ada field yang belum di isi
    it('should response with 400 status code', async () => (
        request(server)
            .post('/api/v1/register')
            .send({
                ...user,
                email: null
            })
            .set('Accept', 'application/json')
            .then((res: { statusCode: unknown; body: unknown; }) => {
                expect(res.statusCode).toBe(400)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        message: "Silahkan input data dengan lengkap!",
                    })
                )
            })
    ))
    
})
describe('POST /api/v1/login', () => {
    // 1. Berhasil Login,
    it('should response with 200 status code', async () => (
        request(server)
            .post('/api/v1/login')
            .send(user)
            .set('Accept', 'application/json')
            .then((res: { statusCode: unknown; body: any; }) => {
                token = res.body.token;
                expect(res.statusCode).toBe(200)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        message: "Berhasil Login",
                        data: {
                            id: expect.any(Number),
                            nama: user.nama,
                            email: user.email,
                            token: expect.any(String),
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String),
                        }
                    })
                )
            })
    ))
    // 2. Email tidak ditemukan
    it('should response with 404 status code', async () => (
        request(server)
            .post('/api/v1/login')
            .send({
                ...user,
                email: 'testa@email.com'
            })
            .set('Accept', 'application/json')
            .then((res: { statusCode: unknown; body: unknown; }) => {
                expect(res.statusCode).toBe(404)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        message: "Email tidak ditemukan!",
                    })
                )
            })
    ))
    // 3. password salah
    it('should response with 401 status code', async () => (
        request(server)
            .post('/api/v1/login')
            .send({
                ...user,
                password: "1"
            })
            .set('Accept', 'application/json')
            .then((res: { statusCode: unknown; body: unknown; }) => {
                expect(res.statusCode).toBe(401)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        message: "Password salah!",
                    })
                )
            })
    ))
})

describe('POST /api/v1/whoami', () => {
    // 1. check data user,
    it('should response with 200 status code', async () => (
        request(server)
            .get('/api/v1/whoami')
            .send(user)
            .set('Accept', 'application/json')
            .then((res: { statusCode: number; body: any; }) => {
                const decodedToken = jwt.verify(token, "Rahasia")
                expect(res.statusCode).toBe(200)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        status: 'OK',
                        message: "Success",
                        data: {
                            id: expect.any(Number),
                            nama: user.nama,
                            email: user.email,
                            avatar: expect.any(String),
                            role: expect.any(String),
                            password: expect.any(String),
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String),
                            googleId: expect.any(String),
                            createdBy: expect.anything(),
                            updatedBy: expect.anything()
                        }
                    })
                )
            })
    ))
})

afterAll( async() => {
    await UsersModel.query().where('email', user.email).del()
    server.close();
})