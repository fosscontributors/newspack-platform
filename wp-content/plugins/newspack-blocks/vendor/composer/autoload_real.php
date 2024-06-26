<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInita36eca8515a065be0337752a24ac1aaa
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInita36eca8515a065be0337752a24ac1aaa', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInita36eca8515a065be0337752a24ac1aaa', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInita36eca8515a065be0337752a24ac1aaa::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
