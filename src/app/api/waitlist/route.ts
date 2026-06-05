import { NextResponse } from 'next/server';

// Simple in-memory storage for demonstration/local validation during UAT
const savedEmails = new Set<string>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, type } = body;

    // Simple validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'O e-mail é obrigatório.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Formato de e-mail inválido.' },
        { status: 400 }
      );
    }

    const allowedTypes = ['establishment', 'client', 'general'];
    if (!type || !allowedTypes.includes(type)) {
      return NextResponse.json(
        { success: false, message: 'Tipo de interesse inválido.' },
        { status: 400 }
      );
    }

    // Check duplication
    if (savedEmails.has(email.toLowerCase())) {
      return NextResponse.json(
        { success: false, message: 'Você já está na nossa lista de espera!' },
        { status: 409 }
      );
    }

    // Add to memory and log
    savedEmails.add(email.toLowerCase());
    console.log(`[Waitlist Lead] Novo lead cadastrado com sucesso: e-mail: ${email}, tipo: ${type}`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Cadastro realizado com sucesso! Em breve traremos novidades.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar cadastro na lista de espera:', error);
    return NextResponse.json(
      { success: false, message: 'Ocorreu um erro ao processar sua solicitação.' },
      { status: 500 }
    );
  }
}
