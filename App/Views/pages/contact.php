<main class="container section">
    <h1>Contactenos</h1>

    <picture>
        <source srcset="/assets/img/destacada3.avif" type="image/avif">
        <source srcset="/assets/img/destacada3.webp" type="image/webp">
        <source srcset="/assets/img/destacada3.jpg" type="image/jpeg">
        <img loading="lazy" src="/assets/img/destacada3.jpg" alt="Contactenos">
    </picture>

    <h2>Llene el formulario de contacto</h2>

    <form action="" method="POST" class="form">
        <fieldset>
            <legend>Información personal</legend>

            <label for="name">Nombre</label>
            <input type="text" name="name" id="name" placeholder="Nombre">

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email">

            <label for="phone">Telefono</label>
            <input type="tel" name="phone" id="phone" placeholder="Telefono">

            <label for="message">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </fieldset>

        <fieldset>
            <legend>Información sobre la propiedad</legend>

            <label for="SellOrBuy">Vende o compra</label>
            <select name="SellOrBuy" id="SellOrBuy">
                <option value="" disabled selected>-- Seleccione --</option>
                <option value="vende">Vende</option>
                <option value="compra">Compra</option>
            </select>

            <label for="price">price</label>
            <input type="number" name="price" id="price" placeholder="Presupuesto">
        </fieldset>

        <fieldset>
            <legend>Información sobre la propiedad</legend>

            <p>¿Como desea ser contactado?</p>
            <div class="form-contact">
                <label for="contact-phone">Telefono</label>
                <input type="radio" name="contact" id="contact-phone" value="Telefono">

                <label for="contact-email">Email</label>
                <input type="radio" name="contact" id="contact-email" value="Email">
            </div>

            <p>Si eligió teléfono, elija la fecha y la hora</p>

            <label for="date">Fecha</label>
            <input type="date" name="date" id="date">

            <label for="time">Hora</label>
            <input type="time" name="time" id="time" min="09:00" max="18:00">
        </fieldset>

        <input type="submit" value="Enviar" class="button btn-green">
    </form>
</main>